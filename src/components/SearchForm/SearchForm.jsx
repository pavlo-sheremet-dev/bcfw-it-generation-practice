import { Component, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ value });
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleChange}
        value={value}
      />
    </SearchFormStyled>
  );
};

// export class SearchForm extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <SearchFormStyled onSubmit={this.handleSubmit}>
//         <FormBtn type="submit">
//           <FiSearch size="16px" />
//         </FormBtn>
//         <InputSearch
//           placeholder="What do you want to write?"
//           name="search"
//           required
//           autoFocus
//           onChange={this.handleChange}
//           value={this.state.value}
//         />
//       </SearchFormStyled>
//     );
//   }
// }
