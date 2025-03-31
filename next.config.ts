import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Habilita a exportação estática
  images: {
    domains: ["leccorside.com.br"], // Adicione o domínio externo aqui
    unoptimized: true, // Necessário para exportação estática quando usando imagens
  },
};

export default nextConfig;
