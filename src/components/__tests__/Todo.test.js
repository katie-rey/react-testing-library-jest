import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Todo from '../Todo'

afterEach(() => {
  cleanup()
})

test('should render completed Todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: true }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('wash dishes')
  expect(todoElement).toContainHTML('strike')
})
test('should render not completed Todo', () => {
  const todo = { id: 1, title: 'make dinner', completed: false }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('make dinner')
  expect(todoElement).not.toContainHTML('strike')
})

test('matches snapshop', () => {
  const todo = { id: 1, title: 'wash dishes', completed: true }
  const tree = renderer.create(<Todo todo={todo} />).toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
