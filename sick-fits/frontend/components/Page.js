import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h1>Page Header!!</h1>
      {children} {cool}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
