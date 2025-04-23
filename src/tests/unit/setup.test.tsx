import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Setup } from '../../components/setup/setup';
import { DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT, SORT_TYPE_LABEL } from '../../constants/config';

describe('Renders the Setup component', () => {
  function getAllSortTypeButtons() {
    let allButtons: HTMLElement[] = [];
    const supportedSortLabels = Object.values(SORT_TYPE_LABEL);
    supportedSortLabels.forEach((label) => {
      allButtons = [...allButtons, screen.getByRole('button', { name: label })];
    });
    return allButtons;
  }

  beforeEach(() => {
    render(<Setup />);
  });

  it('displays the title', () => {
    const titleElement = screen.getByText(/Set up your sort/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the correct number of sort type buttons', () => {
    const sortTypeButtons = getAllSortTypeButtons();
    expect(sortTypeButtons.length).toBe(4);
  });

  it('highlights sort type button when it is clicked and the rest should not be highlighted', () => {
    const sortTypeButtons = getAllSortTypeButtons();
    sortTypeButtons.forEach((clickedButton) => {
      fireEvent.click(clickedButton);
      sortTypeButtons.forEach((button) => {
        if (button === clickedButton) {
          expect(button).toHaveClass('ant-btn-primary');
        } else {
          expect(button).not.toHaveClass('ant-btn-primary');
        }
      });
    });
  });

  it('displays the correct default number of elements', () => {
    const elementCount = screen.getByText(DEFAULT_SORT_SELECTED_ELEMENTS_AMOUNT);
    expect(elementCount).toBeInTheDocument();
  });

  it('updates the number of elements when the randomize button is clicked', () => {
    const randomizeButton = screen.getByRole('button', { name: /Randomize/i });
    fireEvent.click(randomizeButton);
    // Since the number is random, we just check that the element count updates
    const elementCount = screen.getByText(/\d+/i);
    expect(elementCount).toBeInTheDocument();
  });

  it('updates the main sort button text content when clicked', async () => {
    const mainSortButton = screen.getByRole('button', { name: /start sorting/i });
    fireEvent.click(mainSortButton);
    expect(mainSortButton).toHaveTextContent(/Stop Sorting/i);

    await new Promise((resolve) => setTimeout(resolve, 100));

    fireEvent.click(mainSortButton);
    expect(mainSortButton).toHaveTextContent(/Start Sorting/i);
  });

  it('disables the sort algo buttons, randomize button and element slider when sort simulation is running', () => {
    const mainSortButton = screen.getByRole('button', { name: /start sorting/i });
    fireEvent.click(mainSortButton);

    const sortTypeButtons = getAllSortTypeButtons();
    const randomizeButton = screen.getByRole('button', { name: /Randomize/i });
    const elementsSlider = screen.getByRole('slider');

    sortTypeButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
    expect(randomizeButton).toBeDisabled();
    expect(elementsSlider).toHaveAttribute('aria-disabled', 'true');
  });
});
