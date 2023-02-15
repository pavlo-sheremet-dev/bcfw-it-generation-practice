import { Component, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

import 'react-toastify/dist/ReactToastify.css';

import * as api from 'service/image-service';

// const GalleryNew
// export class Gallery extends Component {
//   state = {
//     images: [],
//     page: 1,
//     totalImages: 0,
//     query: '',
//     loading: false,
//     error: '',
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page, error } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.getImages();
//     }
//     if (prevState.error !== error && error) {
//       toast.error(error);
//     }
//   }

//   getImages = async () => {
//     const { query, page } = this.state;
//     try {
//       this.setState({ loading: true });
//       const { images, totalImages } = await api.getImages(query, page);
//       if (!images.length) {
//         this.setState({ error: 'Sorry. There are no images ... 😭' });
//         return;
//       }
//       this.setState(prevState => ({
//         images: [...prevState.images, ...images],
//         error: '',
//         totalImages,
//       }));
//     } catch (error) {
//       this.setState({ error: 'Oops. Something went wrong 😭' });
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   getQuery = ({ value }) => {
//     if (!value.trim() || value === this.state.query) {
//       this.setState({ error: 'Please, change your request' });
//       return;
//     }
//     this.setState({
//       query: value,
//       page: 1,
//       images: [],
//       totalImages: 0,
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, loading, error, totalImages } = this.state;
//     return (
//       <>
//         <SearchForm onSubmit={this.getQuery} />
//         {images.length !== 0 && (
//           <Grid>
//             {images.map(({ alt, src, id }) => {
//               return (
//                 <GridItem key={id}>
//                   <CardItem>
//                     <img src={src} alt={alt} />
//                   </CardItem>
//                 </GridItem>
//               );
//             })}
//           </Grid>
//         )}

//         {!loading && images.length === 0 && !error && (
//           <Text textAlign="center">Sorry. There are no images ... 😭</Text>
//         )}

//         {error && <Text textAlign="center">{error}</Text>}

//         {!loading && totalImages !== images.length && (
//           <Button type="button" onClick={this.loadMore}>
//             Load more
//           </Button>
//         )}

//         {loading && <Text textAlign="center">Loading</Text>}
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           closeOnClick
//           theme="colored"
//         />
//       </>
//     );
//   }
// }

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
