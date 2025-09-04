'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import Button from '../button/Button';

const ButtonAllServices = () => {
    const router = useRouter();
  return (
<Button title="Check all services" onClick={() => router.push("/services")} />
  )
}

export default ButtonAllServices
