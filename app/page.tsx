export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] font-sans">
      {/* Seção Superior - Hero com Imagem de Fundo */}
      <section className="relative overflow-hidden py-20 px-4 min-h-[600px] flex items-center">
        {/* Background Image com Opacidade Reduzida */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://botafogo.s3.us-east-1.amazonaws.com/2026/Fevereiro/2702/53815971689_ef91037c20_k.jpg" 
            alt="Background Botafogo" 
            className="w-full h-full object-cover opacity-40"
          />
          {/* Overlay para garantir contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#000000]/40 to-[#000000]"></div>
        </div>

        {/* Background Decorative "Stars" */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-10">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-20">
          <div className="mb-6 flex justify-center">
            <span className="bg-[#ffffff] text-[#000000] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              Constelação Alvinegra
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Sua paixão brilha <br />
            <span className="text-[#ffffff]">
              onde o Botafogo estiver.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#cbd5e1] mb-10 max-w-3xl mx-auto leading-relaxed">
            O programa oficial de embaixadas que une corações alvinegros ao redor do mundo. Transforme sua torcida em uma comunidade oficial e conecte-se diretamente com o Glorioso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://camisa7.botafogo.com.br/planos" 
              target="_blank"
              className="px-8 py-4 bg-[#ffffff] text-[#000000] font-bold rounded-lg hover:bg-[#e2e8f0] transition-all transform hover:scale-105 text-center"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </section>

      {/* Bloco Explicativo */}
      <section className="py-24 px-4 bg-[#ffffff] text-[#000000]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Mais que torcida, uma rede de conexão.
              </h2>
              <p className="text-lg text-[#475569] mb-6">
                A <strong>Constelação Alvinegra</strong> é a ponte direta entre você e o clube. Aqui, criamos comunidades reais para que nenhum torcedor se sinta sozinho, não importa a distância.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#000000] font-bold">★</span>
                  <span>Conecte-se com botafoguenses da sua região.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#000000] font-bold">★</span>
                  <span>Sua participação ativa vale recompensas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#000000] font-bold">★</span>
                  <span>Viva experiências que só o Botafogo pode proporcionar.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0]">
              <img 
                src="https://botafogo.s3.us-east-1.amazonaws.com/2026/Fevereiro/2702/53814711512_7a528d1f50_k.jpg" 
                alt="Torcida do Botafogo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaques de Participação */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Escolha como brilhar</h2>
            <p className="text-[#94a3b8]">Existem dois caminhos para fazer parte da nossa constelação.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Bloco de Presidente */}
            <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-3xl border border-[#333333] hover:border-[#ffffff] transition-colors group flex flex-col">
              <div className="mb-6 text-4xl">👑</div>
              <h3 className="text-2xl font-bold mb-4">Seja um Presidente</h3>
              <p className="text-[#94a3b8] mb-6 flex-grow">
                Assuma o protagonismo e a liderança da sua região. Como Presidente, você é o representante oficial do Botafogo, responsável por organizar a torcida e fortalecer o nome do clube localmente.
              </p>
              <div className="mt-auto">
                <a 
                  href="https://camisa7.botafogo.com.br/planos" 
                  target="_blank"
                  className="block w-full py-4 bg-[#ffffff] text-[#000000] text-center font-bold rounded-lg hover:bg-[#cbd5e1] transition-all mb-4"
                >
                  Liderar Embaixada →
                </a>
                <p className="text-xs text-[#64748b] text-center">
                  Sócios Cria+ , Escolhido e Nossa gente nao podem exercer essa função.
                </p>
              </div>
            </div>

            {/* Bloco de Membro */}
            <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] p-8 rounded-3xl border border-[#333333] hover:border-[#ffffff] transition-colors group flex flex-col">
              <div className="mb-6 text-4xl">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Seja um Membro</h3>
              <p className="text-[#94a3b8] mb-6 flex-grow">
                Todos os planos de sócio-torcedor podem participar! Reforce seu sentimento de pertencimento, encontre sua comunidade e viva o Botafogo intensamente ao lado de outros alvinegros.
              </p>
              <div className="mt-auto">
                <a 
                  href="https://camisa7.botafogo.com.br/planos" 
                  target="_blank"
                  className="block w-full py-4 border border-[#ffffff] text-[#ffffff] text-center font-bold rounded-lg hover:bg-[#ffffff] hover:text-[#000000] transition-all"
                >
                  Fazer Parte Agora →
                </a>
                <div className="h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco para Não-Sócios */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#000000] via-[#1e1b4b] to-[#000000] border-y border-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ainda não é Sócio-Torcedor?</h2>
          <p className="text-xl text-[#cbd5e1] mb-10 leading-relaxed">
            Para fazer parte de uma embaixada oficial, o primeiro passo é ser sócio. Represente o Glorioso onde quer que você esteja e torne-se parte oficial da história do Botafogo. O seu team precisa da sua oficialização para crescer ainda mais.
          </p>
          <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-[#ffffff] via-[#6366f1] to-[#ffffff]">
            <a 
              href="https://camisa7.botafogo.com.br/planos" 
              target="_blank"
              className="block px-12 py-5 bg-[#000000] text-[#ffffff] font-bold rounded-lg hover:bg-transparent transition-all text-xl"
            >
              Seja Sócio e Entre na Embaixada
            </a>
          </div>
          <p className="mt-6 text-sm text-[#94a3b8]">
            * Obrigatório vínculo ativo em qualquer plano de sócio-torcedor.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#111111] bg-[#000000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://botafogo.s3.us-east-1.amazonaws.com/2026/Fevereiro/2702/logo_botafogo.png" 
              alt="Escudo Botafogo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-[#475569] text-sm">
            © {new Date().getFullYear()} Constelação Alvinegra. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#94a3b8] hover:text-[#ffffff] transition-colors">Termos</a>
            <a href="#" className="text-[#94a3b8] hover:text-[#ffffff] transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}