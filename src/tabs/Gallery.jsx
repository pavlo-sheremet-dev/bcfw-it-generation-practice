import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

import 'react-toastify/dist/ReactToastify.css';

import * as api from 'service/image-service';

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;

    (async function () {
      try {
        setLoading(true);

        const { images, totalImages } = await api.getImages(query, page);
        if (!images.length) {
          setError('Sorry. There are no images ... 😭');
          return;
        }

        setImages(prevImages => [...prevImages, ...images]);
        setError('');
        setTotalImages(totalImages);
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    })();
  }, [query, page]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  function getQuery({ value }) {
    if (!value.trim() || value === query) {
      setError('Please, change your request');
      return;
    }
    setQuery(value);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  }

  function loadMore() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <SearchForm onSubmit={getQuery} />
      {images.length !== 0 && (
        <Grid>
          {images.map(({ alt, src, id }) => {
            return (
              <GridItem key={id}>
                <CardItem>
                  <img src={src} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
      )}

      {!loading && images.length === 0 && !error && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}

      {error && <Text textAlign="center">{error}</Text>}

      {!loading && totalImages !== images.length && (
        <Button type="button" onClick={loadMore}>
          Load more
        </Button>
      )}

      {loading && <Text textAlign="center">Loading</Text>}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </>
  );
};
