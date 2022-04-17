export const caseForStableWin=(Os, Lang)=>{
    if(Lang ==="Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, 'Conda')
                break;
            case "Pip":
                return casePlatformPython(Os, 'Pip')
                break;
            case "Source":
                return casePlatformPython(Os, 'Source')
                break;
            default:
                break;
        }
    }else{
        switch (Os.Packages) {
            case "LibTorch":
                return casePlatformCJava(Os, 'Conda')
                break;
            default:
                break;
        }
        // return "Download here:  https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.11.0.zip"
    }
}
const casePlatformPython = (Os, package1)=>{
    switch (Os.ComputePlatform) {
        case "CUDA 10.2":
            if(package1 ==="Conda"){
                return 'CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3'
            }
            if(package1 ==="Pip"){
                return 'CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3'
            }
            if(package1 ==="Source"){
                return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
            }
            break;
        case "CUDA 11.3":
            if(package1 ==="Conda"){
                return 'conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch'
            }
            if(package1 ==="Pip"){
                return 'pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113'
            }
            if(package1 ==="Source"){
                return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
            }
            break;
        case "CPU":
            if(package1 ==="Conda"){
                return 'conda install pytorch torchvision torchaudio cpuonly -c pytorch'
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
const casePlatformCJava = (Os, package1)=>{
    switch (Os.ComputePlatform) {
        case "CUDA 10.2":
            return 'CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3'
            break;
        case "CUDA 11.3":
            return `Download here (Release version):
            https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-1.11.0%2Bcu113.zip
            Download here (Debug version):
            https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-debug-1.11.0%2Bcu113.zip`
            break;
        case "CPU":
            return `Download here (Release version):
            https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-1.11.0%2Bcpu.zip
            Download here (Debug version):
            https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-debug-1.11.0%2Bcpu.zip`
            break;
        default:
            break;
    }
}