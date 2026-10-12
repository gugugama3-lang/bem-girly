import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Heart, Instagram, MapPin, Menu, MessageCircle, Search, Sparkles, Truck, X, Ribbon as Bow, Gem, Glasses, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import editorial from '@/assets/bem-girly-editorial.jpg';
import bow from '@/assets/laco-cereja.jpg';
import gold from '@/assets/dourados.jpg';
import glasses from '@/assets/oculos-presilha.jpg';

const whatsapp = 'https://wa.me/message/OPB3H4F3CXTTK1';
const instagram = 'https://www.instagram.com/bemgirly/';
const products = [
  { id: 1, name: 'Laço de cetim cereja', category: 'Cabelo', image: bow, note: 'Um toque de romance', tag: 'BEM GIRLY' },
  { id: 2, name: 'Dourados que encantam', category: 'Bijus', image: gold, note: 'Seu brilho de todo dia', tag: 'GIRLY ESSENTIALS' },
  { id: 3, name: 'Óculos & presilha rosé', category: 'Óculos', image: glasses, note: 'A dupla perfeita', tag: 'MOOD DO DIA' },
  { id: 4, name: 'Bolsa cherry', category: 'Bolsas', image: editorial, note: 'O detalhe que faz o look', tag: 'CHERRY LOVE' },
];
const categories = [{ name: 'Tudo', icon: Sparkles }, { name: 'Cabelo', icon: Bow }, { name: 'Bijus', icon: Gem }, { name: 'Óculos', icon: Glasses }, { name: 'Bolsas', icon: ShoppingBag }];

export function Storefront() {
  const [category, setCategory] = useState('Tudo');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [storeOpen, setStoreOpen] = useState(false);
  const visible = products.filter(p => (category === 'Tudo' || p.category === category) && (!onlyFavorites || favorites.includes(p.id)) && p.name.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')));
  function goToCollection() { document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }
  function toggleFavorite(id: number) { setFavorites(prev => prev.includes(id) ? prev.filter(value => value !== id) : [...prev, id]); }

  return <>
    <div className="announcement"><Sparkles size={13} /><span>Pequenos detalhes. Muito mais você.</span><Sparkles size={13} /></div>
    <header className="store-header">
      <a className="wordmark" href="/" aria-label="Bem Girly, início">bem girly<span className="logo-flower">✿</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Button variant="nav" onClick={goToCollection}>Explore a coleção</Button>
        <Button variant="nav" onClick={() => setStoreOpen(true)}>Nossa loja <MapPin /></Button>
        <Button variant="nav" asChild><a href={instagram} target="_blank" rel="noreferrer">Girls club <ArrowUpRight /></a></Button>
      </nav>
      <div className="header-actions">
        <Button variant="ghost" size="icon" aria-label="Buscar acessórios" title="Buscar acessórios" onClick={() => setSearchOpen(!searchOpen)}><Search /></Button>
        <Button variant="ghost" size="icon" aria-label="Ver favoritos" title="Ver favoritos" onClick={() => { setOnlyFavorites(!onlyFavorites); setCategory('Tudo'); goToCollection(); }}><Heart fill={onlyFavorites ? 'currentColor' : 'none'} />{favorites.length > 0 && <span className="favorite-count">{favorites.length}</span>}</Button>
        <Button variant="brand" asChild className="header-whatsapp"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Vamos conversar</a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </header>
    {menuOpen && <nav className="mobile-navigation"><Button variant="nav" onClick={goToCollection}>Explore a coleção <ArrowDown /></Button><Button variant="nav" onClick={() => { setStoreOpen(true); setMenuOpen(false); }}>Nossa loja <MapPin /></Button><Button variant="nav" asChild><a href={instagram} target="_blank" rel="noreferrer">Girls club <Instagram /></a></Button></nav>}
    {searchOpen && <div className="search-bar"><Search size={20} /><input autoFocus placeholder="Qual vai ser seu próximo favorito?" aria-label="Pesquisar na coleção" value={query} onChange={e => { setQuery(e.target.value); goToCollection(); }} /><Button variant="ghost" size="icon" aria-label="Fechar busca" onClick={() => { setSearchOpen(false); setQuery(''); }}><X /></Button></div>}
    <main>
      <section className="editorial-hero">
        <img className="hero-photo" src={editorial} alt="Bolsa cereja, laço, óculos e acessórios dourados sobre fundo rosa" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-content"><span className="eyebrow"><span /> ACESSÓRIOS COM PERSONALIDADE</span><h1>Bem girly<span>.</span></h1><p className="hero-headline">Seu look.<br />Seu jeito.<br /><span>Seu toque girly.</span></p><p className="hero-description">Acessórios para deixar seu look mais você.<br />Porque a graça está nos detalhes.</p><Button variant="brand" size="editorial" onClick={goToCollection}>Encontre seu novo favorito <ArrowUpRight /></Button><span className="hero-location"><MapPin size={14} /> De Praia Grande, com amor.</span></div>
        <div className="hero-sticker"><Heart size={21} /><span>it's a<br /><strong>girly thing!</strong></span></div>
        <span className="hero-caption">UM DETALHE MUDA TUDO ↗</span>
      </section>
      <div className="brand-ribbon" aria-hidden="true"><span>bem você</span><Bow /><span>bem linda</span><Sparkles /><span>bem girly</span><Heart /><span>bem você</span><Bow /><span>bem linda</span><Sparkles /><span>bem girly</span><Heart /></div>
      <section className="collection-section" id="colecao">
        <div className="section-heading"><div><span className="eyebrow">O PRÓXIMO DETALHE DO SEU LOOK</span><h2>Uma seleção <span>bem girly.</span><Sparkles className="heading-sparkle" /></h2></div><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Ver tudo no WhatsApp <ArrowUpRight size={17} /></a></div>
        <div className="collection-toolbar"><div className="category-tabs" aria-label="Categorias">{categories.map(({ name, icon: Icon }) => <Button key={name} variant="category" aria-pressed={category === name} onClick={() => setCategory(name)}><Icon />{name}</Button>)}</div><span className="collection-count">{onlyFavorites ? 'Seus favoritos' : 'Feitos para se apaixonar'} <Heart size={13} /></span></div>
        {onlyFavorites && <Button variant="link" onClick={() => setOnlyFavorites(false)}>Voltar à coleção completa <X /></Button>}
        <div className="product-grid">{visible.map(product => <article className="product" key={product.id}><div className="product-image-wrap"><Button variant="image" onClick={() => setSelected(product)} aria-label={`Ver ${product.name}`}><img className={product.id === 4 ? 'bag-image' : ''} src={product.image} alt={product.name} width={1024} height={1024} loading="lazy" /></Button><span className="product-tag">{product.tag}</span><Button variant="favorite" size="icon" aria-label={`${favorites.includes(product.id) ? 'Remover' : 'Adicionar'} ${product.name} ${favorites.includes(product.id) ? 'dos' : 'aos'} favoritos`} title="Favoritar" onClick={() => toggleFavorite(product.id)}><Heart fill={favorites.includes(product.id) ? 'currentColor' : 'none'} /></Button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.note}</p></div><Button variant="ghost" size="icon" aria-label={`Consultar ${product.name}`} onClick={() => setSelected(product)}><ArrowUpRight /></Button></div></article>)}</div>
        {visible.length === 0 && <div className="empty-state"><Heart /><h3>{onlyFavorites ? 'Seus favoritos começam aqui.' : 'Nenhum acessório por aqui.'}</h3><p>{onlyFavorites ? 'Qual detalhe conquistou seu coração?' : 'Que tal explorar outra categoria?'}</p><Button variant="outline" onClick={() => { setQuery(''); setCategory('Tudo'); setOnlyFavorites(false); }}>Explorar a coleção <ArrowRight /></Button></div>}
        <p className="illustration-note">Seleção e imagens ilustrativas. Consulte os modelos, valores e disponibilidade com a loja.</p>
      </section>
      <section className="girly-club"><div className="club-decor" aria-hidden="true">♡</div><div><span className="eyebrow">VOCÊ JÁ É UMA DAS NOSSAS</span><h2>Welcome to the<br /><span>girls club.</span></h2><p>Looks, novidades e aquela dose de inspiração.<br />O nosso universo fica ainda mais lindo com você.</p><Button variant="brand" size="editorial" asChild><a href={instagram} target="_blank" rel="noreferrer"><Instagram /> Vem para o @bemgirly <ArrowUpRight /></a></Button></div><div className="club-collage"><img src={bow} alt="Laço vermelho de cetim" loading="lazy" width={1024} height={1024} /><img src={glasses} alt="Óculos e presilha rosa" loading="lazy" width={1024} height={1024} /><span>made for you ♡</span></div></section>
      <section className="store-benefits"><div><MapPin /><span><strong>Uma loja, muito amor</strong><small>Encontre a gente em Praia Grande</small></span></div><div><Truck /><span><strong>Seu favorito vai até você</strong><small>Consulte nossas entregas</small></span></div><div><MessageCircle /><span><strong>De girly para girly</strong><small>Escolha com a gente pelo WhatsApp</small></span></div></section>
    </main>
    <footer className="store-footer"><div className="footer-top"><a className="wordmark" href="/">bem girly<span className="logo-flower">✿</span></a><p>Acessórios para deixar seu look mais você.</p><div><Button variant="ghost" size="icon" asChild><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Bem Girly"><Instagram /></a></Button><Button variant="ghost" size="icon" asChild><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp da Bem Girly"><MessageCircle /></a></Button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Bem Girly</span><span>Praia Grande · SP <Heart size={12} /></span><span>Feito com um toque girly.</span></div></footer>
    <Button variant="floating" size="icon" asChild><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle /></a></Button>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="product-dialog">{selected && <><img src={selected.image} alt={selected.name} width={1024} height={1024} /><div className="dialog-copy"><span className="eyebrow">{selected.category}</span><DialogTitle>{selected.name}</DialogTitle><DialogDescription>Inspiração para o seu próximo look. A imagem é ilustrativa; fale com a Bem Girly para conhecer os modelos disponíveis e os valores.</DialogDescription><Button variant="brand" size="editorial" asChild><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Consultar pelo WhatsApp <ArrowUpRight /></a></Button></div></>}</DialogContent></Dialog>
    <Dialog open={storeOpen} onOpenChange={setStoreOpen}><DialogContent><MapPin className="text-primary" size={32} /><DialogTitle>De Praia Grande, com amor.</DialogTitle><DialogDescription>Temos loja física em Praia Grande e também fazemos entregas. Fale com a gente para confirmar o endereço, os horários e as opções de entrega.</DialogDescription><Button variant="brand" asChild><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Falar com a loja <ArrowUpRight /></a></Button></DialogContent></Dialog>
  </>;
}