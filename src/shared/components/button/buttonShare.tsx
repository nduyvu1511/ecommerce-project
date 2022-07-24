import { zaloIcon } from "@/assets"
import { DOMAIN_URL } from "@/services"
import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import { useState } from "react"
import { BsMessenger, BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { RiWhatsappLine } from "react-icons/ri"
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

interface IButtonShare {
  name: string
  description: string
  imageUrl: string
  product_id: number
}

const ButtonShare = ({ name, description, imageUrl, product_id }: IButtonShare) => {
  const url = `${DOMAIN_URL}/product/${product_id}`

  return (
    <div className="button-share">
      <FacebookShareButton
        className="button-share-facebook"
        quote={name}
        title={name}
        hashtag={`#${name}`}
        url={url}
      >
        <FaFacebookF />
      </FacebookShareButton>

      
      <div className="zalo-share-button-wrapper">
        <div
          className="zalo-share-button"
          data-href={url}
          data-oaid="1026828826434252149"
          data-layout="1"
          data-color="blue"
          data-customize="true"
        >
          <div className="image-container">
            <Image layout="fill" objectFit="cover" src={zaloIcon} alt="" />
          </div>
        </div>
      </div>

      <FacebookMessengerShareButton
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ""}
        className="button-share-messenger"
        title={name}
        url={url}
      >
        <BsMessenger />
      </FacebookMessengerShareButton>
      <TwitterShareButton className="button-share-twitter" title={name} url={url}>
        <BsTwitter />
      </TwitterShareButton>
      <WhatsappShareButton className="button-share-whatsapp" title={name} url={url}>
        <RiWhatsappLine />
      </WhatsappShareButton>
    </div>
  )
}

export default ButtonShare
