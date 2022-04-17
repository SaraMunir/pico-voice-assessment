export const resLTS=(Os)=>{
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
                return casePlatformPython(Os, 'Conda', 'Linux')
                break;
            case "Pip":
                return casePlatformPython(Os, 'Pip', 'Linux')
                break;
            case "Source":
                return casePlatformPython(Os, 'Source', 'Linux')
                break;
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch(Os.ComputePlatform) {
            case "CUDA 10.2":
                const resultObj ={
                    note: {
                        message: "Additional support for these binaries may be provided by",
                        hyperLink: "PyTorch Enterprise Support Program Participants.",
                        link: "https://pytorch.org/enterprise-support-program", 
                    },
                    downloadLink: [
                        { 
                            message: "Download here (Pre-cxx11 ABI):", 
                            link: "https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip"
                        },
                        { 
                            message: "Download here (cxx11 ABI):", 
                            link: "https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip"
                        }
                    ]
                }
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            case "CUDA 11.1":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu111.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            case "ROCM 4.5.2 (beta)":
                return `NOTE: ROCm is not supported in LTS`
                break;
            case "CPU":
                return `Download here (Pre-cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-1.8.2%2Bcpu.zip
                Download here (cxx11 ABI):
                https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcpu.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            default:
                break;
        }
    }
}
// linux java done
const getWinRes=(Os, Lang)=>{
    if(Lang === "Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, Lang, 'Win')
                break;
            case "Pip":
                return casePlatformPython(Os, Lang, 'Win')
                break;
            case "Source":
                return casePlatformPython(Os, Lang, 'Win')
                break;
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch(Os.ComputePlatform) {
            case "CUDA 10.2":
                return `Download here (Release version):
                https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip
                Download here (Debug version):
                https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            case "CUDA 11.1":
                return `Download here (Release version):
                https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-1.8.2%2Bcu111.zip
                Download here (Debug version):
                https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu111.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            case "CPU":
                return `Download here (Release version):
                https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-1.8.2%2Bcpu.zip
                Download here (Debug version):
                https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-debug-1.8.2%2Bcpu.zip
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            default:
                break;
        }
    }
}
// Win java done

const getMacRes=(Os, Lang)=>{
    if(Lang === "Python"){
        switch (Os.Packages) {
            case "Conda":
                return casePlatformPython(Os, 'Conda', 'Mac')
                break;
            case "Pip":
                return casePlatformPython(Os, 'Pip', 'Mac')
                break;
            case "Source":
                return casePlatformPython(Os, 'Source', 'Mac')
                break;
            default:
                break;
        }
    }
    if(Lang === "C++ / Java"){
        switch (Os.ComputePlatform) {
            case "CPU":
                return `# macOS is not currently supported for lts
                Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                break;
            default:
                break;
        }
    }
}
// Win java done

const casePlatformPython = (Os, package1, system)=>{
    if(system === 'Linux'){
        switch (Os.ComputePlatform) {
            case "CUDA 10.2":
                if(package1 ==="Conda"){
                    return `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return `# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source`
                }
                break;
            case "CUDA 11.1":
                if(package1 ==="Conda"){
                    return `NOTE: 'nvidia' channel is required for cudatoolkit 11.1
                    conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c nvidia
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "ROCM 4.5.2 (beta)":
                if(package1 ==="Conda"){
                    return 'NOTE: ROCm is not supported in LTS'
                }
                if(package1 ==="Pip"){
                    return 'NOTE: ROCm is not supported in LTS'
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CPU":
                if(package1 ==="Conda"){
                    return `conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            default:
                break;
        }
    }
    // linux done only python
    if(system === 'Win'){
        switch (Os.ComputePlatform) {
            case "CUDA 10.2":
                if(package1 ==="Conda"){
                    return `conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CUDA 11.1":
                if(package1 ==="Conda"){
                    return `NOTE: 'conda-forge' channel is required for cudatoolkit 11.1
                    conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c conda-forge
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            case "CPU":
                if(package1 ==="Conda"){
                    return `conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Pip"){
                    return `pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return `# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source`
                }
                break;
            default:
                break;
        }
    }
    // Win done only python

    if(system === 'Mac'){
        switch (Os.ComputePlatform) {
            case "CPU":
                if(package1 ==="Conda"){
                    return `# macOS is not currently supported for lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.
                    `
                }
                if(package1 ==="Pip"){
                    return `# macOS is not currently supported for lts
                    Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.`
                }
                if(package1 ==="Source"){
                    return '# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source'
                }
                break;
            default:
                break;
        }
    }
    // Mac done only python


}