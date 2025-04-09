"use client";
import { useState } from "react";
import { ArrowDownUp, ChevronDownIcon } from "lucide-react";
import Image from "next/image";

const ConversorMoedas = () => {
  const [cambio, setCambio] = useState(5.7);
  const [quantia, setQuantia] = useState(1);
  const [moeda, setMoeda] = useState("brl");

  const quantiaConvertida = moeda === "brl" ? (quantia / cambio).toFixed(2) : (quantia * cambio).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col items-center  bg-orange-50 px-4">
      
      <div className="p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-[900px] flex-grow flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold text-blue-800 text-center">
            CONVERSOR DE MOEDAS
          </h1>
          <p className="text-gray-400 font-medium text-xl md:text-2xl text-center mt-2 md:mt-4">
            {moeda === "brl" ? "Converta de Real para Dólar" : "Converta de Dólar para Real"}
          </p>

          <div className="mt-6 md:mt-10 bg-white rounded-2xl p-4 sm:p-6">
            <h1 className="text-gray-600 text-base sm:text-lg md:text-2xl font-bold">Quantia</h1>
            <div className="flex sm:flex-row items-center justify-between mt-4 gap-4">
              <div className="flex items-center space-x-2 gap-1">
                <Image
                  src={moeda === "brl" ? "/BR.png" : "/eua.png"}
                  alt={moeda.toUpperCase()}
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                />
                <div className="cursor-pointer hover:bg-gray-200 hover:border-2 flex items-center">
                  <select
                    value={moeda}
                    onChange={(e) => setMoeda(e.target.value)}
                    className="p-2 rounded text-blue-600 font-bold text-lg sm:text-xl md:text-2xl bg-transparent focus:outline-none focus:ring-0 appearance-none"
                  >
                    <option value="brl">BRL</option>
                    <option value="usd">USD</option>
                  </select>
                  <ChevronDownIcon className="text-blue-600" size={20} />
                </div>
              </div>
              <input
                type="number"
                value={quantia === 0 ? "" : quantia}
                onChange={(e) => setQuantia(Math.max(0, parseFloat(e.target.value) || 0))}
                className="border rounded-md px-3 py-2 sm:px-5 sm:py-3 w-20 sm:w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <div className="flex flex-row justify-between items-center mt-4 sm:mt-6 gap-4">
              <label className="text-gray-600 text-base sm:text-lg md:text-2xl font-semibold">
                Taxa de Câmbio
              </label>
              <input
                type="number"
                value={cambio === 0 ? "" : cambio}
                onChange={(e) => setCambio(Number(Math.max(0, parseFloat(e.target.value) || 0)))}
                className="border rounded-md px-3 py-2 sm:px-5 sm:py-3 w-20 sm:w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <div className="w-full border-b-2 border-gray-300 my-4 relative flex justify-center items-center">
              <div className="absolute bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full p-2">
                <ArrowDownUp className="text-white" size={20} />
              </div>
            </div>

            <h1 className="text-gray-600 mt-6 text-base sm:text-lg md:text-2xl font-bold">
              Quantia Convertida
            </h1>
            <div className="flex flex-row items-center justify-between mt-4 gap-4">
              <div className="flex items-center space-x-2 gap-2 sm:gap-4">
                <Image
                  src={moeda === "brl" ? "/eua.png" : "/BR.png"}
                  alt={moeda === "brl" ? "USD" : "BRL"}
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                />
                <h1 className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl">
                  {moeda === "brl" ? "USD" : "BRL"}
                </h1>
              </div>
              <input
                type="text"
                value={quantiaConvertida === "0.00" ? "" : quantiaConvertida}
                readOnly
                className="border rounded-md px-3 py-2 sm:px-5 sm:py-3 w-20 sm:w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div>
            <h1 className="text-center font-semibold mt-6 text-base sm:text-xl md:text-2xl">
              Conversão Realizada
            </h1>
            <p className="text-gray-700 mt-4 text-center font-bold text-lg sm:text-xl md:text-2xl">
              {moeda === "brl"
                ? `R$ ${quantia.toFixed(2)} = $ ${quantiaConvertida}`
                : `$ ${quantia.toFixed(2)} = R$ ${quantiaConvertida}`}
            </p>
          </div>
        </div>
      </div>

      
      <footer className="text-center py-4 text-gray-500 text-sm sm:text-base md:text-2xl border-t-2 border-b-2 w-full">
        Desenvolvido por <span className="font-bold text-black">@André Lucas</span>
      </footer>
    </div>
  );
};

export default ConversorMoedas;