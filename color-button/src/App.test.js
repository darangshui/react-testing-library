import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('this is a h1 title tag', () => {
  render(<App/>);
  const titleTage = screen.getByRole('heading', { name: 'Hi there' });
});

test('this is h2 title tag', function() {
  render(<App />);
  const subTag = screen.getByRole('heading', { name: 'good morning' });
})

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // expect the background color to be MediumVioletRed 
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed');
});


// 첫번째 인수는 테스트를 설명, 두번쨰는 오류가 발생하는지를 확인하기 위해 실행하는 함수
test('initial conditions', () => {

  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});


// quiz test 내가 푼거
test('checkbox test', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');

  // click checkbox
  fireEvent.click(checkbox);

  // button disabled
  expect(colorButton).toBeDisabled();

  // click checkbox
  fireEvent.click(checkbox);

  // button abled
  expect(colorButton).toBeEnabled();
});

// 퀴즈의 정답
test('Checkbox disables button on first click and enables on second click', () => {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});


// 버튼 비활성화 퀴즈 문제 푼거
test('button is gray', () => {
  render(<App/>);

  // checkbox 확인
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  // button 확인
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // checkbox 클릭
  fireEvent.click(checkbox);

  // button이 disable 처리
  expect(colorButton).toBeDisabled();

  // button background 회색으로 변경
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // checkbox 클릭
  fireEvent.click(checkbox);

  // button abled처리
  expect(colorButton).toBeEnabled();

  // button color 변경
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // button click
  fireEvent.click(colorButton);

  // background color 변경
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // text 변경
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed');

  // checkbox 클릭
  fireEvent.click(checkbox);

  // button disabled
  expect(colorButton).toBeDisabled();

  // button color is gray
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // 다시 checkbox click
  fireEvent.click(checkbox);

  // 그럼 버튼이 다시 사용 가능
  expect(colorButton).toBeEnabled();

  // color도 다시 blue로 돌아오는
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// 퀴즈 정답
test('Disabled button has gray background adn reverts to MidnightBlue', () => {

  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'Midnight' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('red')).toBe('red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });

});