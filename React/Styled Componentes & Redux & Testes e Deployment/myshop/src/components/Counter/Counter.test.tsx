import '@testing-library/jest-dom'
import { render, screen} from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from '@testing-library/user-event';

describe('Counter > Unit Tests', ()=>{
  test("it should render Counter component correctly", () => {
    render(<Counter/>)
    
    // const counterValueElement = screen.getByText('0')
    const counterValueElement = screen.getByRole('heading', { level: 1})
    const increaseButtonElement = screen.getByRole('button',{name: 'Aumentar'})
    const decreaseButtonElement = screen.getByRole('button',{name: 'Diminuir'})
  
    expect(counterValueElement).toHaveTextContent("0")
    expect(increaseButtonElement).toBeInTheDocument()
    expect(decreaseButtonElement).toBeInTheDocument()
  
  });
  
  it('should increase counter value when increase button is clicked', ()=>{
    // Renderizamos o componente Counter
    render(<Counter/>)
  
    // Clicar no botão "Aumentar" para aumentar o valor do contador
    // const counterValueElement = screen.getByRole('heading', {level: 1})
    const increaseButtonElement = screen.getByRole('button',{name: 'Aumentar'})
  
    userEvent.click(increaseButtonElement)
  
    const counterValueElement = screen.getByText('1', {exact: true})
  
    // Espero que o valor do contador seja 1
    expect(counterValueElement).toBeInTheDocument()
  })
})

describe("Counter > Integration tests", () => {
  
})
