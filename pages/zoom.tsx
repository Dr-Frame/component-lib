import { zoomApi } from '../services/DictionaryService';

export default function Zoom() {
  const { data } = zoomApi.useGetMeetingsQuery('');
  console.log(data);

  return <div>Zoom</div>;
}
