import { createFileRoute } from "@tanstack/react-router";
import { Storefront } from '@/components/storefront';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Bem Girly | Acessórios com personalidade' },
    { name: 'description', content: 'Acessórios femininos para deixar seu look mais você. Conheça a Bem Girly, em Praia Grande, e converse com a loja pelo WhatsApp.' },
    { property: 'og:title', content: 'Bem Girly | Seu toque girly' },
    { property: 'og:description', content: 'Laços, bijus, bolsas e acessórios com personalidade. De Praia Grande, com amor.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Storefront,
});
