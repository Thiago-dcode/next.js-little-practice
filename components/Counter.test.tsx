import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from "./Counter";

test('handle onClick',()=>{
  
    render(<Counter/>)
    const h1Element = screen.getByRole('contentinfo')
    const buttonElementSum = screen.getByText('+')
    const buttonElementSub = screen.getByText('-')
    //first render
    expect(h1Element).toHaveTextContent('Counter: 0')
    expect(buttonElementSum).toBeInTheDocument()
    expect(buttonElementSub).toBeInTheDocument()
    //Increasing counter
    fireEvent.click(buttonElementSum)
    fireEvent.click(buttonElementSum)
    expect(h1Element).toHaveTextContent('Counter: 2')
    //Decreasing counter
    fireEvent.click(buttonElementSub)
    fireEvent.click(buttonElementSub)
    expect(h1Element).toHaveTextContent('Counter: 0')

})