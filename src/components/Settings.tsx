import { SettingsStore } from 'enmity/api/settings';

interface SettingsProps {
   settings: SettingsStore;
}

/*
export default ({ settings }: SettingsProps) => {
   return <FormRow
      label='Example Setting'
      trailing={
         <FormSwitch
            value={settings.get('example', true)}
            onValueChange={() => settings.toggle('example', true)}
         />
      }
   />;
};
*/