import Head from 'next/head'
import Forecast from '../components/Forecast'
import Sidebar from '../components/Sidebar'
import SearchProvider from '../contexts/Search'

import * as S from '../styles'
import axios from 'axios';

import { GlobalStyle } from '../styles/global'
import { GetServerSideProps } from 'next'
import { ApiResponse } from '../types/ApiResponse'
import { WeatherContext } from '../contexts/Weather'

import { useContext, useEffect } from 'react';

export default function Home({ip, data}: ApiResponse) {
  const { setWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (data) {
      setWeatherData(data);
    }
  }, [data, setWeatherData])


  return (
    <SearchProvider>
      <S.Container>
        <GlobalStyle />
        <Head>
          <title>Weather App</title>
          <meta name="description" content="An Weather App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar ip={ip}/>
        <Forecast />
      </S.Container>
    </SearchProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Handle IP

  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? (forwarded as string).split(/, /)[0] : req.connection.remoteAddress

  // Handle API Data

    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=8cdae16bc23d4715b9e164704221612&q=${ip}&days=5&aqi=no&alerts=no`, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" }
    });

    console.log("get server side props")

  return {
    props: {
      ip,
      data: response.data
    },
  }
}
