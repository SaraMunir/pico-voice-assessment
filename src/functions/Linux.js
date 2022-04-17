export const choicePython=(Os)=>{
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
}
const casePlatform = (Os, package1)=>{
    switch (Os.ComputePlatform) {
        case "CUDA 10.2":
            if(package1 ==="Conda"){
                return 'conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch'
            }
            if(package1 ==="Pip"){
                return 'pip3 install torch torchvision torchaudio'
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
        case "ROCM 4.5.2 (beta)":
            if(package1 ==="Conda"){
                return 'NOTE: Conda packages are not currently available for ROCm, please use pip instead'
            }
            if(package1 ==="Pip"){
                return 'pip3 install torch torchvision --extra-index-url https://download.pytorch.org/whl/rocm4.5.2'
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
                return 'pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu'
            }
            if(package1 ==="Source"){
                return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
            }
            break;
        default:
            break;
    }
}
export const choiceCJava=(Os)=>{
    switch (Os.Packages) {
        case "LibTorch":
            switch (Os.ComputePlatform) {
                case "CUDA 10.2":
                    return `Download here (Pre-cxx11 ABI):
                    https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip
                    Download here (cxx11 ABI):
                    https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip`
                    break;
                case "CUDA 11.3":
                    return `Download here (Pre-cxx11 ABI):
                    https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.11.0%2Bcu113.zip
                    Download here (cxx11 ABI):
                    https://download.pytorch.org/libtorch/cu113/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu113.zip`
                    break;
                case "ROCM 4.5.2 (beta)":
                    return `LibTorch binaries are not available for ROCm, please build it from source`
                    break;
                case "CPU":
                    return `Download here (Pre-cxx11 ABI):
                    https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.11.0%2Bcpu.zip
                    Download here (cxx11 ABI):
                    https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcpu.zip`
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}