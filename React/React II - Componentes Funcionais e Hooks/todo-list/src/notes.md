```typescript
   const [toggle, setToggle] = useState(false)

   useEffect(()=> {
     console.log('Executando a função do useEffect...')

    componentWillUnmount => Cleanup Function
     return()=>{
       // Quando você retorna uma função, essa função é iniciada após o processo do ciclo de vida ser desmontado.
       console.log('Isso aqui vai ser executado quando o componente App for desmontado da tela.')
     }

   }, [toggle])

   //O useEffect será disparado sempre que alguma variável do array de dependências for alterada
   //Por padrão, sempre o useEffect será disparado após a montagem do componente (componentDidMount)
     {/* <button onClick={()=> setToggle(!toggle)}>Toggle</button> */}
```