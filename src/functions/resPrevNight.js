export const resPrevNight=(Os)=>{
    switch (Os.YourOS) {
        case "Linux":
            if(Os.Language==="Python"){
                return getLinuxRes(Os, Os.Language)
            }
            if(Os.Language==="C++ / Java"){
                return getLinuxRes(Os, Os.Language)
            }
            break;
        case "Mac":
            if(Os.Language==="Python"){
                return getMacRes(Os,Os.Language)
            }
            if(Os.Language==="C++ / Java"){
                return getMacRes(Os,Os.Language)
                // return choiceCJava(Os)
            }
            break;
        case "Windows":
            if(Os.Language==="Python"){
                return getWinRes(Os,Os.Language)
            }
            if(Os.Language==="C++ / Java"){
                return getWinRes(Os,Os.Language)
            }
            break;
        default:
            break;
    }
}
const getLinuxRes=(Os, Lang)=>{
    if(Lang === "Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, 'Conda', 'Linux');
            case "Pip":
                return casePlatformPython(Os, 'Pip', 'Linux');
            case "Source":
                return casePlatformPython(Os, 'Source', 'Linux');
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch(Os.ComputePlatform) {
            case "CUDA 10.2":
                return `Download here (Pre-cxx11 ABI):
                    https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip
                    Download here (cxx11 ABI):
                    https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            case "CUDA 11.3":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-shared-with-deps-latest.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            case "ROCM 4.5.2 (beta)":
                return `LibTorch binaries are not available for ROCm, please build it from source`;
            case "CPU":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            default:
                break;
        }
    }
}
const getWinRes=(Os, Lang)=>{
    if(Lang === "Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, Lang, 'Win');
            case "Pip":
                return casePlatformPython(Os, Lang, 'Win');
            case "Source":
                return casePlatformPython(Os, Lang, 'Win');
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch(Os.ComputePlatform) {
            case "CUDA 10.2":
                return `Download here (Pre-cxx11 ABI):
                    https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip
                    Download here (cxx11 ABI):
                    https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            case "CUDA 11.3":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-shared-with-deps-latest.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            case "ROCM 4.5.2 (beta)":
                return `LibTorch binaries are not available for ROCm, please build it from source`;
            case "CPU":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-cxx11-abi-shared-with-deps-latest.zip`;
            default:
                break;
        }
    }
}

const getMacRes=(Os, Lang)=>{
    if(Lang === "Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, 'Conda', 'Mac');
            case "Pip":
                return casePlatformPython(Os, 'Pip', 'Mac');
            case "Source":
                return casePlatformPython(Os, 'Source', 'Mac');
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch (Os.ComputePlatform) {
            case "CUDA 10.2":
                return `CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3`;
            case "CUDA 11.3":
                return `Download here (Release version):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-latest.zip
                Download here (Debug version):
                https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-debug-latest.zip`;
            case "CPU":
                return `Download here (Release version):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-latest.zip
                Download here (Debug version):
                https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-debug-latest.zip`;
            default:
                break;
        }
    }

}

const casePlatformPython = (Os, package1, system)=>{
    if(system === 'Linux'){
        switch (Os.ComputePlatform) {
            case "CUDA 10.2":
                if(package1 ==="Conda"){
                    return 'conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu102'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CUDA 11.3":
                if(package1 ==="Conda"){
                    return 'conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu113'
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
                    return 'pip3 install --pre torch torchvision --extra-index-url https://download.pytorch.org/whl/nightly/rocm4.5.2'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CPU":
                if(package1 ==="Conda"){
                    return 'conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            default:
                break;
        }
    }
    if(system === 'Win'){
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
                    return 'conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu113'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CPU":
                if(package1 ==="Conda"){
                    return 'conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            default:
                break;
        }
    }
    if(system === 'Mac'){
        switch (Os.ComputePlatform) {
            case "CPU":
                if(package1 ==="Conda"){
                    return 'conda install pytorch torchvision torchaudio -c pytorch-nightly'
                }
                if(package1 ==="Pip"){
                    return 'pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cpu'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            default:
                break;
        }
    }

}