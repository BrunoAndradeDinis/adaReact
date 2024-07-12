import { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(()=>{
    return financialData.incomes.reduce((total, income) => {
      console.log('Calculando o total de receitas!')
      return (total += income);
    }, 0);
  }, [financialData.incomes])
  const totalOutcomes = useMemo(()=>{
    return financialData.outcomes.reduce((total, outcome) => {
      console.log('Calculando o total de despesas!')
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes])

  const aplicarDesconto = useCallback((desconto:number)=> {
    return totalOutcomes * (1 - desconto)
  }, [totalOutcomes])
  console.log('renderização do comp')
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "4rem",
        gap: ".5rem",
        alignItems: "center",
      }}
    >
      <h1>Memoization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receitas: ${showValues ? totalIncomes : '???'}`}</p>
      <p>{`Total de Despesas: ${showValues ? totalOutcomes: '???'}`}</p>

      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar valores" : "Mostrar valores"}
      </button>
    </div>
  );
};
