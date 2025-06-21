import type { CodegenConfig } from "@graphql-codegen/cli"
import "dotenv/config"

const config: CodegenConfig = {
    overwrite: true,
    schema: process.env.VITE_GRAPHQL_API_URL,
    documents: ["src/**/*.graphql"],
    generates: {
        "src/gql/": {
            preset: "client",
        },
    },
}

export default config
