export default function PixDonation() {
  return (
    <section className="w-full bg-slate-600 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Coluna 1 - Texto */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-200 mb-3">
          Ajude-nos a manter essa página
        </h2>
        <p className="text-gray-300 mb-2">
          Doe qualquer valor e assim poderemos colaborar com a democracia.
          Somos independentes e sem ajuda financeira.
        </p>
        <p className="text-sm text-gray-400">
          Sua contribuição faz a diferença! ❤️
        </p>
      </div>

      {/* Coluna 2 - PIX */}
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg border border-gray-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Chave PIX</h3>
        <p className="text-blue-600 font-mono break-all mb-4">
          sua-chave-pix-aqui@exemplo.com
        </p>
        {/* Se quiser adicionar um QR Code */}
        {/* <img src="/qrcode-pix.png" alt="QR Code PIX" className="w-40 h-40" /> */}
      </div>
    </section>
  );
}