import React, { createContext, useEffect, useState } from "react"
import useScript from "react-script-hook"

const SavvyCalContext = createContext({})

type SavvyCalProviderProps = {
  children: JSX.Element
}

export function SavvyCalProvider(props: SavvyCalProviderProps) {
  const { children } = props
  const value = useProvider()

  return (
    <SavvyCalContext.Provider value={value}>
      {children}
    </SavvyCalContext.Provider>
  )
}

type UseSavvyCal = {
  open: (opts: OpenOpts) => void
}

type OpenOpts = {
  link: string
  email?: string
  displayName?: string
}

export const useSavvyCal = (): UseSavvyCal => {
  // @ts-ignore
  return React.useContext(SavvyCalContext)
}

function useProvider() {
  const [isLoaded, setLoaded] = useState(false)
  // const [instance, setInstance] = useState(null)
  const [loading, error] = useScript({
    src: "https://embed.savvycal.com/v1/embed.js",
  })

  useEffect(() => {
    if (loading === false) {
      setLoaded(true)
      // @ts-ignore
      window.SavvyCal("init")
    }
  }, [loading])

  const open = (opts: OpenOpts) => {
    // @ts-ignore
    window.SavvyCal("open", opts)
  }

  return {
    isLoaded,
    error,
    open,
  }
}
