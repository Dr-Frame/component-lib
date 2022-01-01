import MultiSelect from '../components/MultiSelect';

const gameDevices = [
  { label: 'Roccat', value: 'Roccat' },
  { label: 'Logitech', value: 'Logitech' },
  { label: 'HyperX', value: 'HyperX' },
  { label: 'Xtrfy', value: 'Xtrfy' },
  { label: 'Asus', value: 'Asus' },
  { label: 'A4Tech', value: 'A4Tech' },
  { label: 'Bloody', value: 'Bloody' },
];

function MultiSelectPage() {
  return (
    <div style={{ width: '400px' }}>
      <MultiSelect data={gameDevices} label="Game devices manufacturer" />
    </div>
  );
}

export default MultiSelectPage;
