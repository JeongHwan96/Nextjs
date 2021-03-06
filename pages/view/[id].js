import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

const Post = ({ item }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {item && <Item item={item} />}
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const api = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(api);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
