import { Component } from 'react';

import * as api from 'service/image-service';

import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Gallery extends Component {
  state = {
    images: [],
    page: 1,
    totalImages: 0,
    query: '',
    loading: false,
    error: '',
  };

  // componentDidMount() {
  //   this.getImages();
  // }
  componentDidUpdate(_, prevState) {
    const { query, page, error } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
    if (prevState.error !== error && error) {
      toast.error(error);
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true });
      const { photos, total_results } = await api.getImages(query, page);
      if (!photos.length) {
        this.setState({ error: 'Sorry. There are no images ... 😭' });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        error: '',
        totalImages: total_results,
      }));
    } catch (error) {
      this.setState({ error: 'Oops. Something went wrong 😭' });
    } finally {
      this.setState({ loading: false });
    }
  };

  getQuery = ({ value }) => {
    if (!value.trim() || value === this.state.query) {
      this.setState({ error: 'Please, change your request' });
      return;
    }
    this.setState({
      query: value,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, error, totalImages } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.getQuery} />
        {images.length !== 0 && (
          <Grid>
            {images.map(({ alt, src, id }) => {
              return (
                <GridItem key={id}>
                  <CardItem>
                    <img src={src.small} alt={alt} />
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
          <Button type="button" onClick={this.loadMore}>
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
  }
}
