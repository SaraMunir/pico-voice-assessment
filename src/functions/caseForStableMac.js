export const caseForStableMac=(Os, Lang)=>{
    if(Lang ==="Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatform(Os, 'Conda')
                break;
            case "Pip":
                return casePlatform(Os, 'Pip')
                break;
            case "Source":
                return casePlatform(Os, 'Source')
                break;
            default:
                break;
        }
    }else{
        return "Download here:  https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.11.0.zip"
    }
}
const casePlatform = (Os, package1)=>{
    switch (Os.ComputePlatform) {
        case "CPU":
            if(package1 ==="Conda"){
                return '# MacOS Conda binaries are for x86_64 only, for M1 please use wheels conda install pytorch torchvision torchaudio -c pytorch'
            }
            if(package1 ==="Pip"){
                return 'pip3 install torch torchvision torchaudio'
            }
            if(package1 ==="Source"){
                return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
            }
            break;
        default:
            break;
    }
}