import tw from 'tailwind-styled-components'

function Header() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  )
}

export default Header

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
`
