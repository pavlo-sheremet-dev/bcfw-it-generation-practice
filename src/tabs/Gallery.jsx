import { Component } from 'react';

import * as api from 'service/image-service';

import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    page: 1,
    totalImages: 0,
    query: '',
    loading: false,
    error: '',
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    try {
      const { photos } = await api.getImages('cat', 1);
      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <SearchForm onSubmit={() => {}} />
        {images.length !== 0 ? (
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
        ) : (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {false && <Button type="button">Load more</Button>}
      </>
    );
  }
}
