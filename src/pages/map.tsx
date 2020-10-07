import React from "react"
import NextHead from "next/head"
import { NextPage, NextPageContext } from "next"

import { isAuth } from "../utils/isAuth"
import { createClient } from "../data/graphql/withApollo"
import { StatesDocument, StatesQuery } from "../data/graphql/generated/graphql"
import { Props } from "../presentation/modules/Select/Select.types"
import MapPage from "../presentation/modules/Map/Map"
import Select from "../presentation/modules/Select/Select"

const Map: NextPage<Props> = ({ data, loading, error }) => {
  return (
    <>
      <NextHead>
        <title>Map</title>
      </NextHead>
      <MapPage />
      <Select data={data} loading={loading} error={error} />
    </>
  )
}

export default Map

export const getServerSideProps = async (ctx: NextPageContext) => {
  isAuth(ctx)

  const apolloClient = createClient()

  const response = await apolloClient.query<StatesQuery>({
    query: StatesDocument,
  })

  return { props: response }
}
