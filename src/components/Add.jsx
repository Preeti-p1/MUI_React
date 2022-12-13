import {
  Avatar,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';

const SytledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        on
        onClick={(e) => {
          setOpen(true);
        }}
        title="Delete"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50%-25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=400"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} varient="span">
              John Deo
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="Primary" />
            <Image color="secondary" />
            <VideoCameraBack color="Primary" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
