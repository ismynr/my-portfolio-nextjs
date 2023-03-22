import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import About from './about';

export default function Home() {
  return (
    <Layout title="Home - Ismi Nururrizqi">
      <About/>
    </Layout>
  )
}
