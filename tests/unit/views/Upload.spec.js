import { mount } from '@vue/test-utils';
import Upload from '@/views/Upload.vue';

describe('Upload', () => {
  
  it('renderiza corretamente', () => {
    const wrapper = mount(Upload);
    expect(wrapper.exists()).toBe(true);
  });

  it('clears data when clearData method is called', async () => {
    const wrapper = mount(Upload);
    
    wrapper.vm.fileInputValue = 'fake file';
    wrapper.vm.countTypeValue = 'agua';
    wrapper.vm.documentTypeValue = 'contrato';

    await wrapper.vm.clearData();

    // Verificação da função de limpar dados
    expect(wrapper.vm.fileInputValue).toBe(null);
    expect(wrapper.vm.countTypeValue).toBe(null);
    expect(wrapper.vm.documentTypeValue).toBe(null);
  });

});
