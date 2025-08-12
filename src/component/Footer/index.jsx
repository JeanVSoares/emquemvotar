import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Coluna 1 - Menu */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Início</a></li>
            <li><a href="/politicos" className="hover:text-white transition">Políticos</a></li>
            <li><a href="/partidos" className="hover:text-white transition">Partidos</a></li>
            <li><a href="/sobre" className="hover:text-white transition">Sobre o Projeto</a></li>
          </ul>
        </div>

        {/* Coluna 2 - Equipe */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Equipe</h2>
          <p className="text-sm leading-relaxed">
            O <span className="font-bold text-white">EmQuemVotar</span> é desenvolvido por uma equipe dedicada a levar informações claras e confiáveis sobre política.  
            Nosso objetivo é ajudar você a votar de forma consciente.
          </p>
          <p className="mt-3 text-sm text-gray-400">Contato: equipe@emquemvotar.com</p>
        </div>

        {/* Coluna 3 - Doações */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Ajude esse Projeto</h2>
          <p className="text-sm leading-relaxed mb-3">
            Sua contribuição ajuda a manter o projeto no ar e gratuito para todos.
          </p>
          <img 
            src="/qrcode-pix.png" 
            alt="QR Code para doações" 
            className="w-32 h-32 object-contain"
          />
          <p className="mt-2 text-xs text-gray-400">Escaneie o QR Code para doar via PIX.</p>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EmQuemVotar - Todos os direitos reservados.
      </div>
    </footer>
  );
}