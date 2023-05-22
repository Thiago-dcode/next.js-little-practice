import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ButtonWrapper } from "./buttonWrapper";

test('handle onClick',()=>{
    const onClick = jest.fn()
    const title = 'Add Item'
    render(<ButtonWrapper onClick={onClick} title={title}/>)
    const buttonElement = screen.getByText(title)

    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)


})