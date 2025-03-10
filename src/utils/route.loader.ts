import { FastifyInstance } from "fastify";
import { glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(fastify: FastifyInstance) {
  console.log("🔍 Buscando rotas automaticamente...");
  const routeFiles = glob.sync(path.join(__dirname, "../features/v*/**/*.routes.ts"));
  console.log("📂 Arquivos de rota encontrados:", routeFiles);

  for (const file of routeFiles) {
    console.log(`📌 Importando arquivo: ${file}`);
    const routes = await import(file);

    if (routes.default) {
      const relativePath = path.relative(path.join(__dirname, "../features"), file);
      const parts = relativePath.split(path.sep);

      const version = parts[0];   // 🔥 Exemplo: "v1"
      const resource = parts[1];  // 🔥 Exemplo: "users"

      if (!version || !resource) {
        console.warn(`⚠️ Estrutura inválida para definir prefixo: ${file}`);
        continue;
      }

      const routePrefix = `/${version}/${resource}`;
      console.log(`✅ Registrando rotas para ${routePrefix}`);

      for (const routeKey in routes.default) {
        const route = routes.default[routeKey];

        if (route && route.method && route.url && route.handler) {
          console.log(`🚀 Registrando rota: ${route.method} ${routePrefix}${route.url}`);

          fastify.route({
            ...route,
            url: `${routePrefix}${route.url}`, // 🔥 Prefixo automático
          });
        } else {
          console.warn(`⚠️ Rota inválida no arquivo ${file}:`, route);
        }
      }
    } else {
      console.warn(`⚠️ Nenhuma rota encontrada no arquivo ${file}`);
    }
  }
}
