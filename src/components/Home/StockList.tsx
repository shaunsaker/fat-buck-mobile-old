import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { StockButton } from './StockButton';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreStocks } from '../../store/actions';
import {
  selectStocks,
  selectStocksLoading,
  selectStocksHasMoreData,
} from '../../stocks/selectors';
import { Stock } from '../../stocks/models';
import { ButtonContainer } from '../ButtonContainer';
import Animator from 'react-native-simple-animators';

const StockListContainer = styled.View`
  flex: 1;
`;

const StockListLabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px;
`;

const StockListItemContainer = styled.View`
  margin: 0 20px 20px;
`;

const StockListLoaderContainer = styled.View``;

interface StockListLoaderProps {
  itemsToRender?: number;
}

const StockListLoader = ({ itemsToRender = 3 }: StockListLoaderProps) => {
  return (
    <StockListLoaderContainer>
      {[...Array(itemsToRender).keys()].map((key) => (
        <StockListItemContainer key={key}>
          <Animator
            type="opacity"
            initialValue={0.25}
            finalValue={0.75}
            duration={600}
            shouldAnimateIn
            shouldRepeat>
            <ButtonContainer />
          </Animator>
        </StockListItemContainer>
      ))}
    </StockListLoaderContainer>
  );
};

interface StockListBaseProps {
  stocks: Stock[];
  isLoading: boolean;
  handleStockPress: (symbol: Stock) => void;
  handleEndReached: () => void;
}

const StockListBase = ({
  stocks,
  isLoading,
  handleStockPress,
  handleEndReached,
}: StockListBaseProps) => {
  const renderItem = useCallback(
    ({ item }: { item: Stock }) => (
      <StockListItemContainer>
        <StockButton
          name={item.symbol}
          instruction={item.valuation.instruction}
          expectedReturn={Math.round(item.valuation.expectedReturn)}
          onPress={() => handleStockPress(item)}
        />
      </StockListItemContainer>
    ),
    [handleStockPress],
  );

  return (
    <StockListContainer>
      <StockListLabelsContainer>
        <Label kind={LabelKinds.secondary}>Name</Label>

        <Label kind={LabelKinds.secondary}>Expected Return %</Label>
      </StockListLabelsContainer>

      {stocks ? (
        <FlatList
          data={stocks}
          keyExtractor={(item) => item.symbol}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            isLoading ? <StockListLoader itemsToRender={3} /> : null
          }
        />
      ) : (
        <StockListLoader />
      )}
    </StockListContainer>
  );
};

export const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector(selectStocks);
  const isLoading = useSelector(selectStocksLoading);
  const hasMoreData = useSelector(selectStocksHasMoreData);

  const onStockPress = useCallback(() => {}, []);

  const onEndReached = useCallback(() => {
    if (!isLoading && hasMoreData) {
      dispatch(fetchMoreStocks());
    }
  }, [dispatch, isLoading, hasMoreData]);

  return (
    <StockListBase
      stocks={stocks}
      isLoading={isLoading}
      handleStockPress={onStockPress}
      handleEndReached={onEndReached}
    />
  );
};
