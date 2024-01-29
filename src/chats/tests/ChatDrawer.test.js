import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from "../../testUtilities";
import { render, act } from '@testing-library/react';
import ChatDrawer from '../ChatDrawer';
import Chat from '../Chat';
import BookClubApi from '../../api';

const mockMessages = [
    {
        name: 'User1',
        text: 'Rest1', 
        date: new Date().toISOString(),
    },
    {
        name: 'User2',
        text: 'test2', 
        date: new Date().toISOString(),
    }
]
jest.mock("../../api", () => ({
    __esModule: true,
    default: {
        getRoomPreviousMessages: jest.fn(),
    },
}));
  
afterEach(() => {
    jest.clearAllMocks();
});

test('renders without crashing', async () => {
    BookClubApi.getRoomPreviousMessages.mockImplementationOnce(() => (mockMessages));
  
    await act(async () => {
      render(
        <MemoryRouter>
          <UserProvider>
            <ChatDrawer />
          </UserProvider>
        </MemoryRouter>
      );
    });
  
  });
  
  test('it renders and matches with snapshot', async () => {
    BookClubApi.getRoomPreviousMessages.mockImplementationOnce(() => (mockMessages));
  
    await act(async () => {
      ({ asFragment } = render(
        <MemoryRouter>
          <UserProvider>
            <ChatDrawer />
          </UserProvider>
        </MemoryRouter>
      ));
    });
  
    expect(asFragment()).toMatchSnapshot();
  });