let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

        
        function adicionarTarefa() {
            const descricao = document.getElementById("novaTarefa").value.trim();

            
            if (descricao) {
                
                const novaTarefa = {
                    descricao: descricao,
                    status: false 
                };

                
                tarefas.push(novaTarefa);

                
                localStorage.setItem('tarefas', JSON.stringify(tarefas));

                
                atualizarListaTarefas();

                
                document.getElementById("novaTarefa").value = "";
            }
        }

        
        function atualizarListaTarefas() {
            const divTarefas = document.getElementById("tarefas");
            divTarefas.innerHTML = ''; 

            tarefas.forEach((tarefa, index) => {
                
                const tarefaElement = document.createElement('div');
                tarefaElement.classList.add('tarefa');

               
                const descricaoClass = tarefa.status ? 'concluida' : 'nao-concluida';

                
                tarefaElement.innerHTML = `
                    <input type="checkbox" id="checkbox-${index}" ${tarefa.status ? 'checked' : ''} onclick="alterarStatus(${index})">
                    <span class="${descricaoClass}">${tarefa.descricao}</span>
                    <button class="excluir" onclick="excluirTarefa(${index})">Excluir</button>
                `;

                
                divTarefas.appendChild(tarefaElement);
            });
        }

        
        function alterarStatus(index) {
            
            tarefas[index].status = !tarefas[index].status;

            
            localStorage.setItem('tarefas', JSON.stringify(tarefas));

           
            atualizarListaTarefas();
        }

        
        function excluirTarefa(index) {
           
            tarefas.splice(index, 1);

            
            localStorage.setItem('tarefas', JSON.stringify(tarefas));

            
            atualizarListaTarefas();
        }

        
        atualizarListaTarefas();