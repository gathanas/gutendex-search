interface PageWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  return <div className="page-wrapper">{props.children}</div>;
};

export default PageWrapper;
