import styled from "styled-components";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

const ButtonWrapper = styled.div`
  display: flex;
`;
