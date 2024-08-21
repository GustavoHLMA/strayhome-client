import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCampaignById } from '@/services/api';
import {
  CampaignInfo,
  Container,
  Content,
  Dates,
  Description,
  Target,
  Title,
  Image,
  BackButton,
  ImageContainer
} from './styles';
import { Button } from '@mui/material';

interface Campaign {
  id: string;
  name: string;
  description: string;
  image: string;
  target: number;
  startDate: string;
  deadline: string;
}

const CampaignDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    if (id) {
      const fetchCampaign = async () => {
        try {
          const response = await getCampaignById(id as string);
          setCampaign(response.data);
        } catch (error) {
          console.error('Error fetching campaign details', error);
        }
      };

      fetchCampaign();
    }
  }, [id]);

  if (!campaign) {
    return <p>Loading...</p>;
  }

  const formattedStartDate = new Date(campaign.startDate).toLocaleDateString();
  const formattedDeadline = new Date(campaign.deadline).toLocaleDateString();

  return (
    <Container>
      <Content>
        <ImageContainer>
          <BackButton onClick={() => router.back()}>&lt;</BackButton>
          <Image src={campaign.image} alt={campaign.name} />
          <Dates>
            Duration:{' '}
            <span>
              {formattedStartDate} | {formattedDeadline}
            </span>
          </Dates>
        </ImageContainer>
        <CampaignInfo>
          <Title>{campaign.name}</Title>
          <Target>
            Target: <span>USD {campaign.target}</span>
          </Target>
          <Description>{campaign.description}</Description>
          <Button
            sx={{
              variant: 'contained',
              background: '#F2B705',
              color: 'black',
              borderRadius: '12px',
              height: '1.85069rem',
              marginBottom: '1rem',
              boxShadow: '2px 4px 0px 1px rgba(30, 30, 30, 0.90)',
              textTransform: 'none',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#e5a50d'
              },
              alignSelf: 'flex-end'
            }}
          >
            Donate
          </Button>
        </CampaignInfo>
      </Content>
    </Container>
  );
};

export default CampaignDetail;
