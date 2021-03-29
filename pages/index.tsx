import {GetStaticProps, GetStaticPropsResult} from 'next'
import {getCoreValue} from '../helpers/values'

interface HomeProps {
  coreValue: string
}

const Home: React.FC<HomeProps> = (props: HomeProps) => (
  <>
    <title>Ukas kjerneverdi</title>

    <pre>{props.coreValue}</pre>

    <footer>
      En tjeneste levert av <a href="http://vaffel.ninja/">VaffelNinja</a>
    </footer>
  </>
)

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    coreValue: getCoreValue(),
  },
  revalidate: 3600,
})

export default Home
