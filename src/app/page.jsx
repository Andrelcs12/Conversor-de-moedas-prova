"use client";
import { useState } from "react";
import { MoveVerticalIcon } from "lucide-react";
import Image from "next/image";

const ConversorMoedas = () => {
  
  const [cambio, setCambio] = useState(5.7);
  const [quantia, setQuantia] = useState(1);

  const quantiaConvertida = (quantia / cambio).toFixed(2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="p-8 rounded-xl w-[900px] max-w-md ">
        <h1 className="text-2xl font-bold text-blue-800 text-center">CONVERSOR DE MOEDAS</h1>
        <p className="text-gray-400 font-medium text-center mt-4">Converta de Real para Dólar</p>
        
        <div className="mt-10 bg-white rounded-2xl p-6">
          <h1 className="text-gray-600">Quantia</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Image src="/BR.png" alt="Real" width={40} height={40} className="rounded-full" />
              <span className="font-semibold text-blue-800">BRL</span>
            </div>
            <input
              type="number"
              value={quantia === 0 ? "" : quantia}
              onChange={(e) => setQuantia(parseFloat(e.target.value) || 0)}
             className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <label className="text-gray-600">Câmbio Dólar</label>
            <input
          type="number"
          value={cambio === 0 ? "" : cambio}
          onChange={(e) => setCambio(Number(e.target.value) || 0)}
          className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
/>


          </div>

          <div className="w-full border-b-2 border-gray-300 my-4 relative flex justify-center items-center">
            <div className="absolute bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full p-2">
              <MoveVerticalIcon className="text-white" size={28} />
            </div>
          </div>
          
          <h1 className="text-gray-600 mt-8">Quantia Convertida</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Image src="/eua.png" alt="Dólar" width={40} height={40} className="rounded-full" />
              <span className="font-semibold text-blue-600">USD</span>
            </div>
            <input
              type="text"
              value={quantiaConvertida === 0 ? "" : quantiaConvertida}
              readOnly
            className="border rounded-md px-5 py-3 w-24 bg-gray-200 font-medium text-gray-700 text-right appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div>
          <h1 className="text-center font-semibold mt-8">Conversão Realizada</h1>
          <p className="text-gray-700 mt-6 text-center font-bold">
            R$ {quantia.toFixed(2)} = $ {quantiaConvertida}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversorMoedas;
