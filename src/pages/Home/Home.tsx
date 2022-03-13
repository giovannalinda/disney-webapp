import { Cards } from 'ui/components/Cards'
import { Header } from 'ui/components/Header'
import { Recommendation } from 'ui/components/Recommendation'

export function Home() {
  return (
    <>
      <Header />
      <Recommendation />
      <Cards />
    </>
  )
}
