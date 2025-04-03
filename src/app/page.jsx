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
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="p-8 rounded-xl w-[900px]">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-800 text-center">CONVERSOR DE MOEDAS</h1>
        <p className="text-gray-400 font-medium lg:text-2xl text-center mt-4">
          {moeda === "brl" ? "Converta de Real para Dólar" : "Converta de Dólar para Real"}
        </p>

        <div className="mt-10 bg-white rounded-2xl p-6">
          <h1 className="text-gray-600 lg:font-bold lg:text-2xl">Quantia</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2 gap-1">
              <Image
                src={moeda === "brl" ? "/BR.png" : "/eua.png"}
                alt={moeda.toUpperCase()}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="cursor-pointer hover:bg-gray-200 hover:border-2 flex items-center">
              <select
              value={moeda}
              onChange={(e) => setMoeda(e.target.value)}
              className="p-2 rounded text-blue-600 font-bold text-2xl decoration-0 appearance-none bg-transparent focus:outline-none focus:ring-0">
              <option value="brl">BRL</option>
              <option value="usd">USD</option>
              </select>
              <ChevronDownIcon className="text-blue-600 " size={28} />
              </div>

             
            </div>
            <input
            type="number"
            value={quantia === 0 ? "" : quantia}
            onChange={(e) => setQuantia(Math.max(0, parseFloat(e.target.value) || 0))}
            className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>

          </div>

          <div className="flex justify-between items-center mt-6">
            <label className="text-gray-600 lg:text-2xl lg:font-semibold">Taxa de Câmbio</label>
            <input
              type="number"
              value={cambio === 0 ? "" : cambio}
              onChange={(e) => setCambio(Number(Math.max(0, parseFloat(e.target.value) || 0)))}
              className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          <div className="w-full border-b-2 border-gray-300 my-4 relative flex justify-center items-center">
            <div className="absolute bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full p-2">
              <ArrowDownUp className="text-white" size={28} />
            </div>
          </div>

          <h1 className="text-gray-600 mt-8 lg:font-bold lg:text-2xl">Quantia Convertida</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2 gap-4 ">
              <Image
                src={moeda === "brl" ? "/eua.png" : "/BR.png"}
                alt={moeda === "brl" ? "USD" : "BRL"}
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-blue-600 font-bold lg:text-2xl">
                {moeda === "brl" ? "USD" : "BRL"}
              </h1>
            </div>
            <input
              type="text"
              value={quantiaConvertida === "0.00" ? "" : quantiaConvertida}
              readOnly
              className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div>
          <h1 className="text-center font-semibold mt-8 lg:text-2xl">Conversão Realizada</h1>
          <p className="text-gray-700 mt-6 text-center font-bold lg:text-2xl">
            {moeda === "brl"
              ? `R$ ${quantia.toFixed(2)} = $ ${quantiaConvertida}`
              : `$ ${quantia.toFixed(2)} = R$ ${quantiaConvertida}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversorMoedas;
