import {getCoreValue} from '../helpers/values'

export default function Home() {
  return (
    <div>
      <title>Ukas kjerneverdi</title>

      <pre>{getCoreValue()}</pre>

      <footer>
        En tjeneste levert av <a href="http://vaffel.ninja/">VaffelNinja</a>
      </footer>
    </div>
  )
}
