import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  padding: 12px;
  background: #ac6df4;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #442b61;
  }

  &:disabled {
    background: #4f3271;
    cursor: not-allowed;
  }
`;

const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid transparent;
  border-top: 3px solid #222;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

interface LoadMoreProps {
  onClick: () => void;
  loading: boolean;
}
const LoadMore: React.FC<LoadMoreProps> = ({ onClick, loading }) => {
  return (
    <div className="flex items-center justify-center my-6">
      <LoadMoreButton onClick={onClick} disabled={loading}>
        {loading ? <Loader /> : "Load More"}
      </LoadMoreButton>
    </div>
  );
};

export default LoadMore;
